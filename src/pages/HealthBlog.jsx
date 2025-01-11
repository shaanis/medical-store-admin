import React from "react";
import Header from "../components/Header";
import '../App.css'
import { Card } from "react-bootstrap";
import Footer from "../components/Footer";

const HealthBlog = () => {
  return (
    <>
      <Header />
      <div className=" h-full w-full  p-5">
        <h1 className="font-bold text-4xl text-center text-green-400 mb-5 pt-3">
          Health Blogs
        </h1>
        <div className="grid grid-cols-2 ">
          <div>
            <h1 className="font-bold text-2xl">High vs low copper foods</h1>
            <p>
              Food and drinks can be categorized as high, medium and low in
              copper content. Remember that eating a large amount of a low
              copper food could quickly add up and become a higher dose of
              copper.
            </p>{" "}
            <br />
            <p>
              Therefore, balancing the diet with a variety of nutritious foods
              will be important.
            </p>{" "}
            <br />
            <p>
              The general limit for copper is about 1mg per day however, as
              mentioned earlier, this limit can be more lenient with time based
              on symptoms and disease management.
            </p>{" "}
            <br />
            <p>
              We encourage each individual to work one-on-one with a registered
              dietitian to understand the right balance of copper for them. For
              most individuals, it is best to make “low” copper foods the base
              of their diet. There are many nutritious foods in the “moderate”
              column, so continue to choose moderate copper foods every day,
              while remaining aware of the listed portion sizes. As for “high”
              copper foods, choose them infrequently, especially those that are
              starred* below as being very high copper.
            </p>
          </div>
          <div className="ms-28 mt-5">
            <iframe
              width="576"
              height="346"
              src="https://www.youtube.com/embed/ILmUbOxbvfU"
              title="Copper Conscious Eating Webinar"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <h2 className="font-bold text-3xl mt-5 text-red-500">Reffer Here</h2>
        <div className="cardBlog">
            
          <Card style={{width:'400px'}} className="border shadow-lg  flex flex-col justify-center items-center pe-0.5 mt-5">
            <Card.Body>
            <iframe
              className="rounded"
              width="380"
              height="280"
              src="https://www.youtube.com/embed/SET84prr9PU"
              title="PLATELET COUNT | HAEMATOLOGY LAB | PHYSIOLOGY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <Card.Title className="mt-3">
              How to Increase Blood Platelets
            </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{width:'400px'}} className="border shadow-lg  flex flex-col justify-center items-center pe-0.5 mt-5">
            <Card.Body>
            <iframe className="rounded" width="380" height="280" src="https://www.youtube.com/embed/xNoanoQ5syY" title="The 5 Top Health Tips of All Time" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Card.Title className="mt-3">
            The 5 Top Health Tips of All Time
            </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{width:'400px'}} className="border shadow-lg flex flex-col justify-center items-center pe-0.5 mt-5">
            <Card.Body>
            <iframe className="rounded" width="380" height="280" src="https://www.youtube.com/embed/QM--onihN-o" title="How to prevent COVID-19 transmission in the workplace" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Card.Title className="mt-3">
            How to prevent COVID-19 transmission in the workplace
            </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{width:'400px'}} className="border shadow-lg flex flex-col justify-center items-center pe-0.5 mt-5">
            <Card.Body>
            <iframe className="rounded" width="380" height="280" src="https://www.youtube.com/embed/LYfw_86Z3GI" title="Treatment and Prevention Against Dengue" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Card.Title className="mt-3">
            Treatment and Prevention Against Dengue
            </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{width:'400px'}} className="border shadow-lg flex flex-col justify-center items-center pe-0.5 mt-5">
            <Card.Body>
            <iframe className="rounded" width="380" height="280" src="https://www.youtube.com/embed/t6uHGuLaYiE" title="Protect Yourself from Viral Fever | How to Prevent yourself from Viral Fever? |  #viralfevers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Card.Title className="mt-3">
            Protect Yourself from Viral Fever | How to Prevent yourself from Viral Fever? 
            </Card.Title>
            </Card.Body>
          </Card>
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HealthBlog;
