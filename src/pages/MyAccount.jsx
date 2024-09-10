import { Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const MyAccount = () => {
  return (
    <div>
      <Heading as="h2" size="lg" mb={5}>
        MyAccount
      </Heading>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MyAccount;
