pragma solidity ^0.4.8;

contract MaterialSupplier {

    struct Material{
        string materialName;
        bool available;
    }

    uint noOfMaterials;

    mapping (address => Material) available_materials;

    modifier isMaterialAvailable(address materialAddress) {require(!available_materials[materialAddress].available); _;}
    modifier isMaterialNotAvailable(address materialAddress) {require(available_materials[materialAddress].available); _;}

    function addMaterial(string materialName, address materialAddress)
    isMaterialAvailable(materialAddress) {
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

    function sellMaterial(address materialAddress)
    isMaterialNotAvailable(materialAddress)
    returns (string materialName) {
        materialName = available_materials[materialAddress].materialName;
        available_materials[materialAddress].available = false;
        noOfMaterials--;
    }
}
