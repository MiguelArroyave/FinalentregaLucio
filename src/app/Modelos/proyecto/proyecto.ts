export class Proyecto {
    public titulo!:string
    public descripcion!:string
    public objetivo!:string
    public hipotesis!:string
    public planteamiento!:string
    public justificacion!:string
    public estado!:string
    setvalues(item:any){
        this.titulo=item.titulo
        this.descripcion=item.descripcion
        this.objetivo=item.objetivo
        this.hipotesis=item.hipotesis
        this.planteamiento=item.planteamiento
        this.justificacion=item.justificacion
        this.estado=item.estado
    }
}
