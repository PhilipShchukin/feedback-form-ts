import { Request, Response } from 'express';
import { validationResult, ResultFactory} from 'express-validator';



export const myValidationResult: ResultFactory<string> = validationResult.withDefaults({
    formatter: error => error.msg as string,
  });
  export const message = (req: Request, res: Response):any => {
    
    const errors: string[] = myValidationResult(req).array();
    
    if(errors.length){
        return res.status(400).json({
            status:"error",
            msg: errors
        })
    }

    res.json({
        status:"success",
        msg: "Ваша заявка успешно отправлена"
    })
  }
