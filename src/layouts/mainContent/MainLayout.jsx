import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./MainLayout.scss";

export default function MainLayout(props) {
  const { children } = props;

  return (
    <div>
      <Header />
      <main  className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div  className="flex-fill">{children}</div>
      </main>
    </div>
  );
}
