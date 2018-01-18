export class User{
    constructor(
        public firstName:string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string = "",
        public passwordConfirmation: string = "",
        public streetAddress:string="",
        public unit:string="",
        public city:string="",
        public state:string="",
        public mood:string=""
      ){}
    }