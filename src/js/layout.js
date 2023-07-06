import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Container } from "react-bootstrap";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbar";
import { Footer } from "./component/footer";
import { BookCatalog } from "./component/bookcatalog";
import { BookDiscussions } from "./component/bookdiscussions";
import { MyProfile } from "./component/myprofile";
import { SignIn } from "./component/signin";
import { CreateAccount } from "./component/createaccount";
import { SignUp } from "./component/signup";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <Container>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <NavbarMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookcatalog" element={<BookCatalog />} />
            <Route path="/discussions" element={<BookDiscussions />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/createaccount" element={<SignUp />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </Container>
  );
};

export default injectContext(Layout);

