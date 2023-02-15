import { paths } from "./config";

import { LoginPage } from "pages/auth/formPage/LoginPage";
import { RegistrationPage } from "pages/auth/formPage/RegistrationPage";
import { ActivateProfilePage } from "pages/auth/activateProfilePage/ActivateProfilePage";
import { ChangePasswordPage } from "pages/auth/formPage/ChangePasswordPage";

import { HomePage } from "pages/homePage/HomePage";
import { OrganizationsPage } from "pages/organizations/OrganizationsPage";

import { MyProfilePage } from "pages/profile/myProfile/MyProfilePage";
import { MyOrganizations } from "pages/profile/myOrganizations/MyOrganizations";
import { SettingsPage } from "pages/profile/settings/SettingsPage";

export const RoutesList = [
    {path: paths.homePage, element: <HomePage/>},
    {path: paths.organizationsPage, element: <OrganizationsPage/>},
    {path: paths.loginPage, element: <LoginPage/>},
    {path: paths.registrationPage, element: <RegistrationPage/>},
    {path: paths.activateProfile, element: <ActivateProfilePage/>},
    {path: paths.changePasswordPage, element: <ChangePasswordPage/>},
    {path: paths.profilePage, element: <MyProfilePage/>},
    {path: paths.myOrganizations, element: <MyOrganizations/>},
    {path: paths.profileSettings, element: <SettingsPage/>},
    {path: paths.missing, element: <HomePage/>},
]