import { SpecialityEnum } from "constants/speciality";

import { ShowDeveloper } from "./developer";

export interface ShowSpecialty {
    pk: number,
    specialty: SpecialityEnum,
    organizationDeveloper: ShowDeveloper
    organization: string
}

export interface Specialty {
    specialty: SpecialityEnum,
    organizationDeveloper: number
    organization: number
}