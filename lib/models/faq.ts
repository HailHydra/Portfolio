import { Schema,models,model } from "mongoose"; 

const faqSchema = new Schema(
    { 
      id  : {type:"string" , required:true},
      que : {type: "string" , required:true},
      ans : {type: "string" , required:true}
    },
    {
        timestamps:true
    }
)


const FAQ = models.faq || model("faq",faqSchema) ;


export default FAQ;

