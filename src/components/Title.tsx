import React from "react";
import "../styles/style.css";

type Props = {
  equipment: string;
};

const Title = ({ equipment }: Props) => {
  return (
    <>
      <h1 className="title">都道府県別人口推移 {equipment} ver</h1>
      <h3>※ チェックは最大5個まで！</h3>
    </>
  );
};

export default Title;
