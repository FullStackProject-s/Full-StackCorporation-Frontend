import { paths } from "./config";

import { LoginPage } from "pages/auth/formPage/LoginPage";
import { RegistrationPage } from "pages/auth/formPage/RegistrationPage";
import { OrganizationsPage } from "pages/organizations/OrganizationsPage";

export const RoutesList = [
    {path: paths.organizationsPage, element: <OrganizationsPage/>},
    {path: paths.loginPage, element: <LoginPage/>},
    {path: paths.registrationPage, element: <RegistrationPage/>},
]