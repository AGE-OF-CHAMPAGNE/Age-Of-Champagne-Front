import React, { useEffect, useState } from "react";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import classes from "./Search.module.css";
import MyCardList from "../../components/MyCardList/MyCardList";
import {
  getAllVintages,
  getVintageCardById,
  searchVintagesByString,
} from "../../services/api/vintage";
import getIdFromUrl from "../../services/transformers/getIdFromUrl";
import { getDistrictById } from "../../services/api/district";
import MySpinner from "../../components/UI/MySpinner/MySpinner";

function Search() {
  const { title, wrapper, search } = classes;
  const [value, setValue] = useState("");
  const [vintages, setVintages] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    getAllVintages().then((response) => {
      setVintages(response);
    });
  }, []);

  useEffect(() => {
    setVintages(undefined);
    searchVintagesByString(value).then((response) => {
      setVintages(response);
    });
  }, [value]);

  useEffect(() => {
    const fetchData = async () => {
      if (vintages && vintages.length > 0) {
        try {
          const updatedList = await Promise.all(
            vintages.map(async ({ id, name, district }) => {
              const disId = getIdFromUrl(district);

              const response = await getDistrictById(disId);
              return {
                id,
                district: response.name,
                name,
                img: { src: getVintageCardById(id), alt: name },
              };
            })
          );
          setList(updatedList);
          console.log(list);
          console.log(vintages);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Error fetching district:", error);
        }
      } else {
        setList(null);
      }
    };
    fetchData();
  }, [vintages]);

  return (
    <div className="container pt-3">
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Recherche</MyPageTitle>
      </section>
      <section className="d-flex flex-column align-items-center">
        <div className={wrapper}>
          <input
            className="form-control me-2"
            type="search"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Rechercher"
            aria-label="Search"
          />
        </div>
      </section>
      <section className={search}>
        {list && vintages && list.length > 0 && vintages.length > 0 ? (
          <div className="position-relative">
            <MyCardList nameType={2} list={list} />
          </div>
        ) : (
          ""
        )}
        {vintages === undefined ? <MySpinner active /> : ""}
        {vintages && vintages.length === 0 ? (
          <h2>Désolé, on n&apos;a rien trouvé</h2>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default Search;
