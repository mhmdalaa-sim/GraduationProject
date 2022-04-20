import httpClient from "../http-common";

const getAllItems =()=>{
    return httpClient.get("/admin/items/");
}
const getDeletedItems =()=>{
    return httpClient.get("/admin/deletedItems/");
}
const createItem =data=>{
    return httpClient.post("/admin/items",data);
}
const getItem=id=>{
    return httpClient.get(`/admin/items/${id}`);
}
const removeItem=id=>{
    return httpClient.delete(`/admin/items/${id}`);
}
const updateItem =data=>{
    return httpClient.put("/admin/items/",data);
}
const restoreItem=id=>{
    return httpClient.delete(`/admin/deletedItems/${id}`);
}
//Users Service
const getAllUsers =()=>{
    return httpClient.get("/admin/roles/");
}
const getDeletedUsers =()=>{
    return httpClient.get("/admin/deletedRoles/");
}
const createUser =data=>{
    return httpClient.post("/admin/roles/",data);
}
const getUser=id=>{
    return httpClient.get(`/admin/roles/${id}`);
}
const removeUser=id=>{
    return httpClient.delete(`/admin/users/${id}`);
}
const updateUser =data=>{
    return httpClient.put("/admin/roles/",data);
}
const restoreUser=id=>{
    return httpClient.delete(`/admin/deletedUsers/${id}`);
}

//Warehouses Service
const getAllWarehouses =()=>{
    return httpClient.get("/admin/warehouses");
}
const getDeletedWarehouses =()=>{
    return httpClient.get("/admin/deletedWarehouses/");
}
const createWarehouse =data=>{
    return httpClient.post("/admin/warehouses/",data);
}
const getWarehouse=id=>{
    return httpClient.get(`/admin/warehouses/${id}`);
}
const removeWarehouse=id=>{
    return httpClient.delete(`/admin/warehouses/${id}`);
}
const updateWarehouse =data=>{
    return httpClient.put("/admin/warehouses",data);
}
const restoreWarehouse=id=>{
    return httpClient.delete(`/admin/deletedWarehouses/${id}`);
}
const getEditHistory =(id,name)=>{
    return httpClient.get(`/admin/getEditHistory/${name}/${id}`);
}
export default { getAllUsers,getDeletedUsers,createUser,getUser,removeUser,restoreUser,updateUser,getEditHistory,
                 getAllItems,getDeletedItems,createItem,getItem,removeItem,restoreItem,updateItem,
                 getAllWarehouses,getDeletedWarehouses,createWarehouse,getWarehouse,removeWarehouse,updateWarehouse,restoreWarehouse
                 };