import { speciality } from "constants/speciality";

import { ShowDeveloper } from "./developer";

export interface ShowSpecialty {
    pk: number,
    specialty: speciality,
    organizationDeveloper: ShowDeveloper
    organization: string
}

export interface Specialty {
    specialty: speciality,
    organizationDeveloper: number
    organization: number
}