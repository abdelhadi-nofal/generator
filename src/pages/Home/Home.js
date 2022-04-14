import { List } from "@material-ui/core";
import React from "react";
import FilterPanel from "../../components/Home/FilterPanel/FilterPanel";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import ListView from "../../components/Home/ListView/ListView";
import "./styles.css";
import { useState, useEffect } from "react";
import { dataList } from "../../constants/contants";
import EmptyView from "../../components/common/EmptyView/EmptyView";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [generators, setGenerators] = useState([
    { id: 1, checked: false, label: "portable generators" },
    { id: 2, checked: false, label: "standby generators" },
    { id: 3, checked: false, label: "gasoline generators" },
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handelSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleChangeChecked = (id) => {
    const generatorsStateList = generators;
    const changeCheckedGenerators = generatorsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setGenerators(changeCheckedGenerators);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Category Filter
    if (selectedCategory) {
      //   console.log(selectedCategory);
      if (selectedCategory === "reset") {
        // <ListView />;
        // <h1>asd</h1>;
      } else {
        updatedList = updatedList.filter(
          (item) => item.category === selectedCategory
        );
      }
    }

    // Generators Filter
    const generatorsChecked = generators
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (generatorsChecked.length) {
      console.log(generatorsChecked);

      updatedList = updatedList.filter((item) =>
        generatorsChecked.includes(item.generator)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, generators, searchInput]);
  return (
    <div className="home">
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />

      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* Side Panel */}
          <FilterPanel
            selectCategory={handelSelectCategory}
            selectedCategory={selectedCategory}
            generators={generators}
            changeChecked={handleChangeChecked}
          />
        </div>
        <div className="home_list-wrap">
          {/* ListView $ Empty View */}
          {resultsFound ? <ListView list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
}

export default Home;
