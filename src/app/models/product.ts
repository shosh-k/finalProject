
export class product{
	CodeProduct!: number 
	NameProduct!:string 
	CategoryProduct! :number 
	SubCategoryProduct!  :number 
	CodeSallerProduct! :number 
	PriceProduct! :Float32Array 
	DescriptionProduct !:string 
	StatusProduct!  :number 
	MoveOrBuy!  :number 
	NewOrOld! :number 
	ProductSold!:number
}
export class likeProduct{
	CodeLikeProduct!: number 
	CodeProduct!: number
	CodeUser! :number
}
export class shoppingCast{
	CodeShoppingCast!: number 
	CodeProduct!: number 
	CodeUser! :number 
}