// import React from "react";
// import * as styles from "../pages/main.module.css";
// import { useMutation } from "@apollo/client";
// import { BOOKMARKDATA } from "../graphql/query";
// import { DELETE_BOOKMARK } from "../graphql/mutation";

// export default function UserCards({ id, url, task }) {
//   // console.log(id)
//   const [deleteTodo] = useMutation(DELETE_BOOKMARK);

//   const delteBtn = (id) => {
//     deleteTodo({
//       variables: {
//         id: id,
//       },
//       refetchQueries: [{ query: BOOKMARKDATA }],
//     });
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.deleteBtn}>
//         <h2 onClick={() => delteBtn(id)}>X</h2>
//       </div>
//       <h5>Title : {task}</h5>
//       <h5>Url : {url}</h5>
//     </div>
//   );
// }
