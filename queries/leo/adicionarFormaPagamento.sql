-- use [fl_db-fl4qa]

-- Cadastrar nova condição de pagamento Id 289

select * from CondicaoPagamento where idErp in ( '0395','0396')

insert into CondicaoPagamento (IdErp, Descricao)
values  ('0396', 'VG CC LEO')


-- Cadastrar forma de pagamento 957

select * from FormaPagamento where IdERP in (750, 957)

insert into FormaPagamento(
IdErp,
Descricao,
CondicaoPagamentoId,
Ativo,
QuantidadeParcelas,
SomenteMateriaisBNDES,
ValidarLimiteNotaCredito,
GrupoFormaPagamentoId,
PesoHierarquiaFormas,
FormaUnica,
AceitaCupomFiscal,
ExibirCredito,
PrazoMedio,
OrigemForma,
TipoFormaPagamento)
select
    957 as IdErp, -- Depende do Id criado no SAP
    'VG CC LEO' as Descricao, -- Depende do Desc criado no SAP
    289 as CondicaoPagamentoId, -- depende do ID retornado na query de criar Condicao de Pagamento
    Ativo,
    QuantidadeParcelas,
    SomenteMateriaisBNDES,
    ValidarLimiteNotaCredito,
    GrupoFormaPagamentoId,
    PesoHierarquiaFormas,
    FormaUnica,
    AceitaCupomFiscal,
    ExibirCredito,
    PrazoMedio,
    OrigemForma,
    TipoFormaPagamento
from FormaPagamento
where IdErp = 750

-- Parametriza a nova forma de pagamento para as lojas, classes, e grupos

insert into FormaPagamentoClasseLoja
select distinct LojaId, ClasseFinanceiraId, GrupoFormaPagamentoId, FormaPagamento_Id = 9219, TipoOrdem_Id -- FormaPagamento_Id depende do id retornado na query de inserir forma de pagamento
from FormaPagamentoClasseLoja
Where (LojaId in(1001,1003,1004,1006,1007,1008,1009,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1034,1035,1036,1048,1049,1050,1051,1054,1055,1056,1057)) -- lojas que utilizaram a fomrma de pagamento
and (ClasseFinanceiraId in(8,9,10,11)) And (GrupoFormaPagamentoId = 14)


-- Configura o valor maximo para a forma de pagamento

select * from FormaPagamento where IdERP in (957)
select * from ValorMaximoFormaPagamento

insert into ValorMaximoFormaPagamento(FormaPagamentoId,IdERP,ValorMaximo,EmpresaIdERP)
    VALUES (
        9219, -- também depende da FormaPagamento_id criada
        957,
        15000,
        1000)


-- corrigir VG Dinheiro

select * from FormaPagamento where IdERP in ( 302, 352, 938, 957)
select * from ValorMaximoFormaPagamento

update ValorMaximoFormaPagamento
set FormaPagamentoId = 483
where IdERP = 352

select * from FormaPagamento where IdERP in ( 302, 352, 938, 957)
select * from ValorMaximoFormaPagamento