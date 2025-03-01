import React from "react";

import { CardHeader,Card, Container, Label,CardBody,Input, CardFooter, Button} from "reactstrap";

function UploadProductImage(){

    return (
      <div className="col-sm-12 p-0 mt-5">
        <Container>
          <Card>
            <CardHeader className="text-center">
              <b><h1>Upload Product Image</h1></b>
            </CardHeader>

            <CardBody>
              <Label ><h5>Product Id</h5></Label>
              <Input placeholder="Enter Product Id here" type={"number"}></Input>

              <Label className="mt-3"><h5>Upload Image</h5></Label>
              <Input type={"file"}></Input>
            </CardBody>

            <CardFooter>
              <div className="col-sm-12 p-0 text-center">
                <Button type="submit" color="success" className="w-25 upload-pro-img" >
                  Upload Image
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Container>
      </div>
    );
    
}

export default UploadProductImage

