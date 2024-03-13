import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product ID",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Price",
    dataIndex: "Price",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
  {
    title: "Order date,",
    dataIndex: "date",
  },
];
const data1 = [
  {
    key: 11934857485,
    name: "Jon Snow",
    product : `Rivet Bigelow Modern`,
    Price: `$253`,
    staus: `Delivered`,
    date : `10/03/2024`,
  },
  {
    key: 29538929487,
    name: "Cersei Lannister",
    product: `Baltsar Chair`,
    Price: `$89`,
    staus: `Pending`,
    date : `12/03/2024`,
  },
  {
    key: 38257425457,
    name: "Jaime Lannister",
    product: `Helmar Chair`,
    Price: `$112`,
    staus: `Delivered`,
    date : `01/02/2024`,
  },
  {
    key: 43656546456,
    name: "Jon Snow",
    product: `Realme 8`,
    Price: `$599`,
    staus: `Pending`,
    date : `12/02/2024`,
  },
  {
    key: 53456546454,
    name: "Anya Stark",
    product: `One Plus Nord`,
    Price: `$799`,
    staus: `Delivered`,
    date : `23/02/2024`,
  },
  {
    key: 65645745744,
    name: "Jon Snow",
    product: `Beat EP Headphones`,
    Price: `$199`,
    staus: `Delivered`,
    date : `14/02/2024`,
  },
  {
    key: 74656546577,
    name: "Daenerys Targaryen",
    product: `Realme 8`,
    Price: `$599`,
    staus: `Pending`,
    date : `12/03/2024`,
  },
  {
    key: 84574575777,
    name: "Ever Melisandre",
    product: `Beat EP Headphones`,
    Price: `$199`,
    staus: `Pending`,
    date : `09/03/2024`,
  },
  {
    key: 95675474767,
    name: "Ferrara Clifford",
    product: `One Plus Nord`,
    Price:`$799`,
    staus: `Delivered`,
    date : `25/02/2024`,
  },
  {
    key: 104574745745,
    name: "Rossini Frances",
    product: `Baltsar Chair`,
    Price: `$32`,
    staus: `Pending`,
    date : `08/03/2024`,
  },
  {
    key: 11575474577,
    name: "Harvey Roxie",
    product: `Rivet Bigelow Modern`,
    Price: `$253`,
    staus: `Delivered`,
    date : `10/02/2024`,
  },
  {
    key: 12457457547,
    name: "Steve Goodman",
    product: `Baltsar Chair`,
    Price: `$89`,
    staus: `Pending`,
    date : `11/03/2024`,
  },
  {
    key: 13457547547,
    name: "Jon Snow",
    product: `Realme 8`,
    Price: `$599`,
    staus: `Delivered`,
    date : `06/03/2024`,
  },
  {
    key: 14457675675,
    name: "Ever Melisandre",
    product: `Baltsar Chair`,
    Price: `$89`,
    staus: `Pending`,
    date : `10/03/2024`,
  },
];

const Orders = () => {
  return (
    <div className="mt-4 bg-gray ">
        <h3 className="mb-5 title">Recent Orders</h3>
        <div>
        <Table
            columns={columns}
            dataSource={data1.map((item) => ({
              ...item,
              staus: (
                <span className={item.staus === "Delivered" ? "green" : "yellow"}>
                  {item.staus}
                </span>
              ),
            }))}
          />
        </div>
      </div>
  );
};

export default Orders;
