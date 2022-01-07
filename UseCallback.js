import React, { useState, useMemo, useCallback, useEffect } from "react";

export const Test = ({ getItem }) => {
  // console.log(getItem());
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItem());
    console.log("useEffect");
  }, [getItem]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}> {item} </div>
      ))}
    </div>
  );
};

const App = () => {
  const [number, setNumber] = useState(10);
  const [Dark, setDark] = useState(false);

  // const getItems = useMemo(() => {
  //   return [number, number + 1, number + 2];
  // },[number]);
  // console.log(getItems());
  // ----------- UseMeno return only return statemnents -----------
  // Like => [0,1,2];

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  console.log(getItems());
  // ----------- UseCallBack return whole function -----------
  // Like => () => {return [number, number + 1, number + 2]}

  const theme = {
    backgroundColor: Dark ? "black" : "white",
    color: Dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <Test getItem={getItems} />
    </div>
  );
};

export default App;
