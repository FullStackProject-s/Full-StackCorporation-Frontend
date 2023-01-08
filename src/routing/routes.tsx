import { paths } from "./config";

import { LoginPage } from "pages/auth/formPage/LoginPage";
import { RegistrationPage } from "pages/auth/formPage/RegistrationPage";
import { ChangePasswordPage } from "pages/auth/formPage/ChangePasswordPage";

import { OrganizationsPage } from "pages/organizations/OrganizationsPage";
import { ProfilePage } from "pages/profile/ProfilePage";
import { MyOrganizations } from "pages/myOrganizations/MyOrganizations";

export const RoutesList = [
    {path: paths.organizationsPage, element: <OrganizationsPage/>},
    {path: paths.loginPage, element: <LoginPage/>},
    {path: paths.registrationPage, element: <RegistrationPage/>},
    {path: paths.changePasswordPage, element: <ChangePasswordPage/>},
    {path: paths.profilePage, element: <ProfilePage/>},
    {path: paths.myOrganizations, element: <MyOrganizations/>},
]