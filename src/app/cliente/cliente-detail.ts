import { TarjetaDeCredito } from './tarjetaDeCredito';
import { Cliente } from './cliente';
import { Pagos } from '../pagos/pagos';

/**
* This class represents a book of the BookStore. 
* It contains all the information relevant to the book.
*/
export class ClienteDetail extends Cliente {
   
    pagos: Pagos[];
    
    tarjetas: TarjetaDeCredito[];
}
