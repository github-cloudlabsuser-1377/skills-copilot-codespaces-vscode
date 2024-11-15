provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "example" {
  name     = "myResourceGroup"
  location = "EastUS"
}

resource "azurerm_storage_account" "example" {
  name                     = "mystorageaccount${random_integer.suffix.result}"
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
}

resource "random_integer" "suffix" {
  min = 10000
  max = 99999
}