export const isValidUser = (user: any): boolean => {
  return ( 
    typeof user == "object" && 
    typeof user.name == "object" && 
    typeof user.email == "string"
);
}
