import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import * as styles from "./main.module.css";
import Heading from "../components/Heading";
import UserInput from "../components/UserInput";
import ListDataHeading from "../components/ListData-Heading";
import UserCards from "../components/UserCards";
import Addbutton from "../components/Addbutton";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { BOOKMARKDATA } from "../graphql/query";
import { ADD_bOOKMARK } from "../graphql/mutation";

export default function Home() {
  // useQuery
  const { loading, error, data } = useQuery(BOOKMARKDATA);
  console.log(data)
  // use Mutation
  const [addBookMark] = useMutation(ADD_bOOKMARK);

  // Input State //
  const [task, setTask] = useState("");
  const [url, setUrl] = useState("");

  const addData = () => {
    // if the input have data it will save in the database and Retrive it
  
    if ((task, url)) {
      addBookMark({
        variables: {
          task: task,
          url: url,
        },
        refetchQueries: [{ query: BOOKMARKDATA }],
      });
      // if the input will be Empty then Alert will be shown
    } else {
      alert("The Inputs Values Are Empty Please Fill It First!");
    }
    // after the data is send to database input will be empty
    setTask("");
    setUrl("");
  };

  // Loader Start

  if (loading) {
    return <Loading />;
  }

  // Error Start
  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.main_container}>
      {/* Heading */}
      <Heading />
      {/* Inputs Container */}
      <div className={styles.inputs_container}>
        {/* UserInput*/}
        <UserInput task={task} setTask={setTask} url={url} setUrl={setUrl} />

        {/* Send Data Btn */}
        <Addbutton addBtn={addData} />
        {/* Send Data Btn End*/}
      </div>
      {/* Inputs Container End*/}

      {/* BookMark List Container Heading*/}
      <ListDataHeading />

      {/* BookMark List Container Data  */}

      <div className={styles.mainCard}>
        {data.bookmarks.map((val , identity) => {
          return (
            <>
              <UserCards
                key={identity}
                id={val.id}
                task={val.task}
                url={val.url}
              />
            </>
          );
        })}
      </div>
      {/* BookMark List Container Data End  */}
    </div>
  );
}
