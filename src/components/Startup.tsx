import React, { useState, useEffect, SyntheticEvent } from "react";
import "./Startup.scss";
// import api from "../api/Api";

const foundationCheckbox = [
  { name: "Setup virtual office" },
  { name: "Set mission & vision" },
  { name: "Select business name" },
  { name: "Buy domains" },
];

const discoveryCheckbox = [
  { name: "Create roadmap" },
  { name: "Competitor anlysis" },
];

const deliveryCheckbox = [
  { name: "Release marketing website" },
  { name: "Release MVP" },
];

const Startup: React.FC = () => {
  const [foundation, setFoundation] = useState<any[]>([]);
  const [discovery, setDiscovery] = useState<any[]>([]);
  const [delivery, setDelivery] = useState<any[]>([]);
  // const [finish, setFinish] = useState<any[]>([]);

  useEffect(() => {
    setFoundation(foundationCheckbox);
    setDiscovery(discoveryCheckbox);
    setDelivery(deliveryCheckbox);
  }, []);

  const foundationChange = (e: SyntheticEvent) => {
    const { name, checked } = e.target as HTMLInputElement;
    if (name === "all") {
      let temp = foundation.map((check) => {
        return { ...check, isChecked: checked };
      });
      setFoundation(temp);
    } else {
      let temp = foundation.map((check) =>
        check.name === name ? { ...check, isChecked: checked } : check
      );
      setFoundation(temp);
    }
  };

  const discoveryChange = (e: SyntheticEvent) => {
    const { name, checked } = e.target as HTMLInputElement;
    if (name === "all") {
      let temp = discovery.map((check) => {
        return { ...check, isChecked: checked };
      });
      setDiscovery(temp);
    } else {
      let temp = discovery.map((check) =>
        check.name === name ? { ...check, isChecked: checked } : check
      );
      setDiscovery(temp);
    }
  };

  // const fetch = async () => {
  //   try {
  //     const response = await api.get("");
  //     // setFinish(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(`Error: ${error}`);
  //   }
  // };
  // useEffect(() => {
  //   fetch();
  // }, []);

  const deliveryChange = (e: SyntheticEvent) => {
    const { name, checked } = e.target as HTMLInputElement;
    if (name === "all") {
      let temp = delivery.map((check) => {
        return { ...check, isChecked: checked };
      });
      // fetch();
      setDelivery(temp);
    } else {
      let temp = delivery.map((check) =>
        check.name === name ? { ...check, isChecked: checked } : check
      );
      setDelivery(temp);
    }
  };

  return (
    <section className="section">
      <div className="startup__bar">
        <h2 className="title">My startup progress</h2>

        {/* Foundaton */}
        <form className="">
          <div className="checked__block">
            <h2 className="subtitle">
              <span>1</span>
              Foundation
            </h2>
            <input
              type="checkbox"
              className="checkbox"
              name="all"
              checked={!foundation.some((check) => check?.isChecked !== true)}
            />
          </div>

          {/* checkboxes */}
          {foundation.map((check, index) => (
            <div className="form__check" key={index}>
              <input
                type="checkbox"
                className=""
                name={check.name}
                checked={check?.isChecked || false}
                onChange={foundationChange}
              />
              <label className="">{check.name}</label>
            </div>
          ))}
        </form>

        {/* Discovery */}
        <form className="">
          <div className="checked__block">
            <h2 className="subtitle">
              <span>2</span>
              Discovery
            </h2>
            <input
              type="checkbox"
              className="checkbox"
              name="all"
              checked={!discovery.some((check) => check?.isChecked !== true)}
            />
          </div>

          {/* checkboxes */}
          {discovery.map((check, index) => (
            <div className="form__check" key={index}>
              <input
                type="checkbox"
                className=""
                name={check.name}
                checked={check?.isChecked || false}
                onChange={discoveryChange}
              />
              <label className="">{check.name}</label>
            </div>
          ))}
        </form>

        {/* Delivery */}
        <form className="">
          <div className="checked__block">
            <h2 className="subtitle">
              <span>3</span>
              Delivery
            </h2>
            <input
              type="checkbox"
              className="checkbox"
              name="all"
              checked={!delivery.some((check) => check?.isChecked !== true)}
            />
          </div>

          {/* checkboxes */}
          {delivery.map((check, index) => (
            <div className="form__check" key={index}>
              <input
                type="checkbox"
                className=""
                name={check.name}
                checked={check?.isChecked || false}
                onChange={deliveryChange}
              />
              <label className="">{check.name}</label>
            </div>
          ))}
        </form>
      </div>

      {/* {finish.map((el) => (
        <p key={el.id}>{el.text}</p>
      ))} */}
    </section>
  );
};

export default Startup;
