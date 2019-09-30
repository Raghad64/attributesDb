class shipment {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }

    getId(){
        return this.id;
    }

    getStatus(){
        return this.status;
    }
}

class shipments{
   constructor(){
    this.shipments=shipments;
  }

   addShipment(shipment){
    this.shipments.push(shipment);
   }
}

let newShipment=new  shipment("23456789763","Pending");
let newShipment1=new shipment("54345345534","Activated");
let newShipment2=new shipment("65432567856","Declined");
let newShipment3=new shipment("76543234565","Activated");

let shipmentsArray=new shipments();
shipmentsArray.addShipment(newShipment);
shipmentsArray.addShipment(newShipment2);
shipmentsArray.addShipment(newShipment3);
shipmentsArray.addShipment(newShipment4);

// var shipmentsRow = $('#Row1');
// var shipmentTemplate = $('#shipmentTemplate');

// var pendingRow= $('#Row2');
// var pendingTemplate = $('#pendingTemplate');


for(i=1;i<shipmentsArray.length;i++){
    if(shipmentsArray[i].getStatus=="Activated"||shipmentsArray[i].getStatus=="Declineed"){
        // shipmentTemplate.find('#shipmentID').text(shipmentsArray.getId[i]);
        // shipmentTemplate.find('#shipmentStatus').text(shipmentsArray.getId[i]);
        // shipmentsRow.append(shipmentTemplate.html());
    }
   

    else if (shipmentsArray[i].getStatus=="Pending"){
        // pendingTemplate.find('#shipmentID').text(shipmentsArray.getId[i]);
        // pendingTemplate.find('#shipmentStatus').text(shipmentsArray.getId[i]);
        // pendingRow.append(pendingTemplate.html());
    }

}