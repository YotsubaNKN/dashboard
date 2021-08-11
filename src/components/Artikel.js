import { useState } from "react";
import axios from "axios";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

function CreateBarang() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    axios.post("http://backendpkl.spacearts.id/api/barang/create", {
      nama: name,
      harga: price,
      kategori: category,
    });
  };

  return (
    <div className="mx-5 my-3">
      <h1>Buat Data Barang</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("nama", { required: true })}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          {...register("harga", { required: true })}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          {...register("kategori", { required: true })}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateBarang;