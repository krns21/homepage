interface dir {
    id:number;
    ModuleName:string;
    ModuleCode:string;
    Notes:string;
    Chapters: Array<string>;
}

export const directory: Array<dir> = [
    {
        id:0,
        ModuleName: "Riemannian Geometry",
        ModuleCode: "MATH0072",
        Notes: "",
        Chapters:[]
    },
    {
        id:1,
        ModuleName: "Lie Groups and Lie Algebras",
        ModuleCode: "MATH0075",
        Notes: "",
        Chapters:[]
    },
    {
        id:2,
        ModuleName: "Algebraic Geometry",
        ModuleCode: "MATH0076",
        Notes: "",
        Chapters:[]
    },
    {
        id:3,
        ModuleName: "Project in Mathematics",
        ModuleCode: "MATH0084",
        Notes: "",
        Chapters:[]
    },
]