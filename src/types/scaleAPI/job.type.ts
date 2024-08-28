export type Job = {
    Id: string
    Header1?: string
    Header2?: string
    JobID?: string
    Code?: string
    Name?: string
    Variant?: string
    Manufacturer?: string
    Amount?: string
    Color?: string
    Custom7?: string
    Custom8?: string
    Custom9?: string
    Custom10?:string
    Custom11?: string
    Custom12?: string
    Warnings?: string
    AmountChangeable?: number
    RecalcAllowed?: number
    DatabaseEntry?: number
    PrintAllowed?: number
    ChangeCanAllowed?: number
    UserChangeable?: number
    FirstEntryChangeable?: number
    Reply?:  string[]
    User?: User[]
    Recipe?: Recipe[]
}

type User = {
    Name: string
    Pass: string
}

type Recipe = {
    Name: string
    Color: string
    Warnings: string
    Comp: Object[]
}