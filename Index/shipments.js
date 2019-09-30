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

var shipmentsRow = $('#Row1');
var shipmentTemplate = $('#shipmentTemplate');

var pendingRow= $('#Row2');
var pendingTemplate = $('#pendingTemplate');


for(i=1;i<shipmentsArray.length;i++){
    if(shipmentsArray[i].getStatus=="Activated"||shipmentsArray[i].getStatus=="Declineed"){
        ideaTemplate.find('#shipmentID').text(shipmentsArray.getId[i]);
        ideaTemplate.find('#shipmentStatus').text(shipmentsArray.getId[i]);

    }
   

    else if (shipmentsArray[i].getStatus=="Pending"){
        ideaTemplate.find('#ideaTitle').text(idea[0]);
        ideaTemplate.find('#desc').text(idea[7]);

        ideaRow.append(ideaTemplate.html());s
    }

}