import { useState } from "react";
import { useAuth } from "../../components/hooks/useAuth";
import ModalSection from "../../components/atoms/Modal";
import { API, graphqlOperation } from "aws-amplify";
import RegisterProfile from "../../graphqlQueries/RegisterProfile.js";

export default function CreateProfile() {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const registerProfile = async (variableData) => {
    const data = await API.graphql(
      graphqlOperation(RegisterProfile, { ...variableData })
    );
    console.log("data", data);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const playerId = new Date().getTime();
    const profileId = new Date().getTime();
    registerProfile({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      height: data.get("height"),
      weight: data.get("weight"),
      gender: data.get("gender"),
      dob: data.get("dob"),
      profileId,
      playerId,
    });

    // signUp({
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   username: data.get("username"),
    //   phone_number: data.get("phone_number"),
    // });
  };

  const handleCategoryClick = (e) => {
    setFormData({ category: e.currentTarget.dataset.id });
    setModalOpen(true);
  };
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 md:max-w-md m-auto flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={"/dashpod_logo.png"} className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Complete Profile
          </h2>
        </div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <ul role="list" className="divide-y divide-gray-100">
            <li
              className="gap-x-6 py-5 bg-orange-700 text-center cursor-pointer"
              onClick={handleCategoryClick}
              data-id="individual"
            >
              <p className="text-sm font-semibold leading-6 text-white">
                {"Individual"}
              </p>
            </li>
            <li
              className="gap-x-6 my-2 py-5 cursor-pointer bg-orange-700 text-center"
              onClick={handleCategoryClick}
            >
              <p className="text-sm font-semibold leading-6 text-white">
                {"Trainer"}
              </p>
            </li>
            <li
              className="gap-x-6 my-2 py-5 cursor-pointer bg-orange-700 text-center"
              onClick={handleCategoryClick}
            >
              <p className="text-sm font-semibold leading-6 text-white">
                {"Academy"}
              </p>
            </li>
            <li
              className="gap-x-6 my-2 py-5 cursor-pointer bg-orange-700 text-center"
              onClick={handleCategoryClick}
            >
              <p className="text-sm font-semibold leading-6 text-white">
                {"School"}
              </p>
            </li>
            <li
              className="gap-x-6 my-2 py-5 cursor-pointer bg-orange-700 text-center"
              onClick={handleCategoryClick}
            >
              <p className="text-sm font-semibold leading-6 text-white">
                {"Military"}
              </p>
            </li>
            <li
              className="gap-x-6 my-2 py-5 cursor-pointer bg-orange-700 text-center"
              onClick={handleCategoryClick}
            >
              <p className="text-sm font-semibold leading-6 text-white">
                {"Gym"}
              </p>
            </li>
          </ul>
        </div>
        <ModalSection
          handleSubmit={handleSubmit}
          open={modalOpen}
          setOpen={setModalOpen}
        />
      </div>
    </>
  );
}
