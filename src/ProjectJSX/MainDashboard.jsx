import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faPersonDigging,
  faSeedling,
  faHouseChimney,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ icon, title, description, isList = false }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-green-50 m-4 transform transition duration-300 hover:scale-105">
      <div className="px-6 py-4">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={icon}
            className="text-green-500 text-4xl mr-4"
          />
          <div className="font-bold text-2xl">{title}</div>
        </div>
        {isList ? (
          <ul className="text-gray-700 text-base list-disc list-inside">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-base">{description}</p>
        )}
      </div>
    </div>
  );
};

const MainDashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 mt-4">
        <h1 className="text-6xl text-center mb-8">
          Connecting Growers & Consumers
        </h1>
        <div className="flex justify-center flex-wrap">
          <Card
            icon={faLeaf}
            title="Pure & Organic from farmers"
            description="Pure, Fresh, Healthy & Organic Products from Organic Farmers or Processors. Products are supplied by either Farmers themselves or by LocalFarmers.in supply team."
          />
          <Card
            icon={faPersonDigging}
            title="Grower to Consumer"
            description="Better Price share to Producers. Healthy Products delivered directly to Consumers. Making Farming Ecologically Sustainable."
          />
          <Card
            icon={faSeedling}
            title="Variety of Products"
            description="Variety of Products direct from Producers on a single Platform. Organic Fruits, Vegetables, Grocery, Spices, Desi Cow Based Products, & Many More."
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-6xl text-center">HOW IT WORKS?</h1>
      </div>
      <div className="flex justify-center flex-wrap">
        <Card
          icon={faUser}
          title="Consumers"
          description={[
            "Order your favorite products from favorite farmers!",
            "Receive the products delivered to you!",
            "Review the Product, Farmer & LocalFarmers Team!",
            "Support local farmers and contribute to the local economy!",
            "Enjoy fresh, healthy, and sustainable products straight from the source!",
          ]}
          isList={true}
        />
        <Card
          icon={faHouseChimney}
          title="Growers"
          description={[
            "Produce healthy farm products free from harmful chemicals!",
            "Publish your products details & their prices!",
            "Get orders from Customers!",
            "Supply to consumers yourself or through LocalFarmers Supply Team!",
            "Get customers' review on your products!",
          ]}
          isList={true}
        />
      </div>
    </>
  );
};

export default MainDashboard;
