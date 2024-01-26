import { gql } from "@apollo/client";

const GET_ARANCELES = gql`
    query MisAranceles ($arancelesInput: ArancelesInput!) {
        aranceles(ArancelesInput: $arancelesInput) {
            multicarrera {
                codigo_carrera      
                nombre_carrera    
            }
            carrera    
            numero_contrato    
            periodo    
            matricula {
                valor      
                dscto_pronto_pago      
                becas_mineduc      
                becas_internas      
                pago_contado      
                saldo_favor      
                deuda_pagar      
                monto_pagado      
                saldo_deuda      
                intereses      
                cobranza      
                saldo_pendiente    
            }
            arancel {
                valor      
                dscto_pronto_pago      
                becas_mineduc      
                becas_internas      
                pago_contado      
                saldo_favor      
                deuda_pagar      
                monto_pagado      
                cae      
                saldo_deuda      
                intereses      
                cobranza      
                saldo_pendiente    
            }
        }
    }
`;

export default {
    GET_ARANCELES
};
