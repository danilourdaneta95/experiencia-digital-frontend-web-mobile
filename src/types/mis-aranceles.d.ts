export interface Multicarrera {
    codigo_carrera: string;
    nombre_carrera: string;
}

export interface Matricula {
    valor: number;
    dscto_pronto_pago: number;
    becas_mineduc: number;
    becas_internas: number;
    pago_contado: number;
    saldo_favor: number;
    deuda_pagar: number;
    monto_pagado: number;
    saldo_deuda: number;
    intereses: number;
    cobranza: number;
    saldo_pendiente: number;
}

export interface Arancel {
    valor: number;
    dscto_pronto_pago: number;
    becas_mineduc: number;
    becas_internas: number;
    pago_contado: number;
    saldo_favor: number;
    deuda_pagar: number;
    monto_pagado: number;
    cae: number;
    saldo_deuda: number;
    intereses: number;
    cobranza: number;
    saldo_pendiente: number;
}

export interface Aranceles {
    multicarrera: Multicarrera[];
    carrera: string;
    numero_contrato: string;
    periodo: string;
    matricula: Matricula;
    arancel: Arancel;
}

export interface ArancelesData {
    aranceles: Aranceles;
}