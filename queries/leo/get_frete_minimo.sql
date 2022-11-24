use FL4
select * from CobrancaFretePorCEP
where CEPInicial = '06730000' and LojaId in (1000, 1500, 1048) and TipoSaidaId in ('23')