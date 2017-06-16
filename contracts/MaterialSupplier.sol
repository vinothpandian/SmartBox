pragma solidity ^0.4.8;

contract MaterialSupplier {

    struct Material{
        string materialName;
        bool available;
    }

    uint noOfMaterials;

    mapping (address => Material) available_materials;

    modifier isMaterialAvailable(address materialAddress) {if(!available_materials[materialAddress].available){throw;} _;}
    modifier isMaterialNotAvailable(address materialAddress) {if(available_materials[materialAddress].available){throw;} _;}

    function addMaterial(string materialName, address materialAddress)
    isMaterialNotAvailable(materialAddress) {
        available_materials[materialAddress] = Material(materialName, true);
        noOfMaterials++;
    }

    function removeMaterial(address materialAddress)
    isMaterialAvailable(materialAddress) {
        delete available_materials[materialAddress];
        noOfMaterials--;
    }

    function getNoOfMaterialsAvailable() constant returns (uint){
        return noOfMaterials;
    }

    // Sells material
    function purchaseMaterial(address materialAddress)
    isMaterialAvailable(materialAddress)
    {
        available_materials[materialAddress].available = false;
        noOfMaterials--;
    }
}
