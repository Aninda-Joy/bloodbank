/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function AddBlood({ isEdit = false, data, fetchData = () => {} }) {
  const [inputData, setInputData] = useState({
    name: "",
    blood_group: "",
    area: "",
    date: "",
  });

  useEffect(() => {
    if (isEdit) {
      setInputData({
        name: data.name,
        blood_group: data.blood_group,
        area: data.area,
        date: moment(data.date).format("YYYY-MM-DD"),
      });
    }
  }, [isEdit, data]);

  const handleSubmit = async () => {
    if (isEdit) {
      const dt = {
        ...inputData,
        id: data.id,
      };
      await axios.put("http://localhost:8800/api/donors", dt).then((res) => {
        fetchData();
        navigate("/find-bloods");
        setInputData({
          name: "",
          blood_group: "",
          area: "",
          date: "",
        });

        setOpen(!open);
      });
      // const inputDate = {

      // await axios.put("http://localhost:8800/api/donors/blood-donors", inputDate);
    } else {
      axios.post("http://localhost:8800/api/donors", inputData).then((res) => {
        navigate("/find-bloods");
        setInputData({
          name: "",
          blood_group: "",
          area: "",
          date: "",
        });

        setOpen(!open);
        window.location.reload();
      });
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {!isEdit ? (
          <Button
            variant=""
            className=" bg-teal-500 hover:bg-teal-600 text-white"
            onClick={() => {
              const accessToken = localStorage.getItem("u_token");
              if (!accessToken) {
                navigate("/login");
              } else {
                setOpen(!open);
              }
            }}
          >
            Add Blood Donor
          </Button>
        ) : (
          <Button
            variant=""
            className="w-full bg-teal-100 hover:bg-teal-200 text-teal-600"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Edit{" "}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{!isEdit ? "Add" : "Edit"} Blood Donor</DialogTitle>
          <DialogDescription>
            Give us the information about the blood donor.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="group" className="text-right">
              Blood Group
            </Label>
            <Input
              id="group"
              value={inputData.blood_group}
              onChange={(e) =>
                setInputData({ ...inputData, blood_group: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="area" className="text-right">
              Area
            </Label>
            <Input
              id="area"
              value={inputData.area}
              onChange={(e) =>
                setInputData({ ...inputData, area: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Available
            </Label>
            <Input
              type="date"
              value={inputData.date}
              onChange={(e) =>
                setInputData({ ...inputData, date: e.target.value })
              }
              id="date"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
            className="bg-teal-500 hover:bg-teal-600"
          >
            {!isEdit ? "Add" : "Edit"} Donor
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
