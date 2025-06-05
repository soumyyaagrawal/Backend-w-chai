class apierrors extends Error
{
    constructor(
        statuscode,
        message="something went wrong",
        error=[],
        stack=""
    ){
        super(message);
        this.statuscode=statuscode;
        this.data=null;
        this.success= false;
        this.message= message;
        this.errors = errors;

        if(stack){
            this.stack=stack;
        }
        else{
            error.captureStackTxrace(this, this.constructore);
        }
    }
}

export{apierrors}