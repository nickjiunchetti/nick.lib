use [fl_db-fl4qa]

insert into menu (Descricao,Action,Controller,UrlExterna,Ordem,IdPai,ClassHtml,IdHtml,IdTipo,IdClass)
values('Admin', NULL, NULL, NULL, 16, 15, NULL, NULL, 4, 'admin');

select * from menu;

insert into menu (Descricao,Action,Controller,UrlExterna,Ordem,IdPai,ClassHtml,IdHtml,IdTipo,IdClass)
values('Cadastrar Loja', 'CadastrarLoja', 'Admin', NULL, 16, 71, 'MenuItemConfig', NULL, 4, 'cadastrarloja');


delete from menu where (Id = 72)
select * from menu;
