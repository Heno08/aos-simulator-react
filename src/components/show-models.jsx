import React from "react";
import axios from 'axios';

export default function ShowModels({ models }) {
  const deleteModel = (id) => {
    axios.delete(`/api/v1/units/${id}`)
      .then(() => this.setState({ status: 'Delete successful' }))
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <>
      <h1>Model List:</h1>
        {React.Children.toArray(models.map((model) => (
            <><p>{model.name}</p> <button onClick={() => deleteModel(model.id)}>Delete</button></>
          )))}
    </>
  )
}
