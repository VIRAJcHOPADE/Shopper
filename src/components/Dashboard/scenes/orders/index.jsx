import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "SNo",
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
];
const data1 = [
  {
    key: 1,
    name: "Jon Snow",
    product : `Rivet Bigelow Modern`,
    Price: `$253`,
    staus: `Delivered`,
  },
  {
    key: 2,
    name: "Cersei Lannister",
    product: `Baltsar Chair`,
    Price: `$89`,
    staus: `Pending`,
  },
  {
    key: 3,
    name: "Jaime Lannister",
    product: `Helmar Chair`,
    Price: `$112`,
    staus: `Delivered`,
  },
  {
    key: 4,
    name: "Jon Snow",
    product: `Realme 8`,
    Price: `$599`,
    staus: `Pending`,
  },
  {
    key: 5,
    name: "Anya Stark",
    product: `One Plus Nord`,
    Price: `$799`,
    staus: `Delivered`,
  },
  {
    key: 6,
    name: "Jon Snow",
    product: `Beat EP Headphones`,
    Price: `$199`,
    staus: `Delivered`,
  },
  {
    key: 7,
    name: "Daenerys Targaryen",
    product: `Realme 8`,
    Price: `$599`,
    staus: `Pending`,
  },
  {
    key: 8,
    name: "Ever Melisandre",
    product: `Beat EP Headphones`,
    Price: `$199`,
    staus: `Pending`,
  },
  {
    key: 9,
    name: "Ferrara Clifford",
    product: `One Plus Nord`,
    Price:`$799`,
    staus: `Delivered`,
  },
  {
    key: 10,
    name: "Rossini Frances",
    product: `Baltsar Chair`,
    Price: `$32`,
    staus: `Pending`,
  },
  {
    key: 11,
    name: "Harvey Roxie",
    product: `Rivet Bigelow Modern`,
    Price: `$253`,
    staus: `Delivered`,
  },
  {
    key: 12,
    name: "Steve Goodman",
    product: `Baltsar Chair`,
    Price: `$89`,
    staus: `Pending`,
  },
  {
    key: 13,
    name: "Jon Snow",
    product: `Realme 8`,
    Price: `$599`,
    staus: `Delivered`,
  },
  {
    key: 14,
    name: "Ever Melisandre",
    product: `Baltsar Chair`,
    Price: `$89`,
    staus: `Pending`,
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
