  String nome = NomeFunc.getNomeF();
    try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conexao = DriverManager.getConnection("jdbc:mysql://localhost:3306/tech_service",
                                                            "root","");
        
    //comando sql
        PreparedStatement st =conexao.prepareStatement("select s.id_servico, s.tipo_servico,s.valor_servico, s.defeito_informado, s.aparelho, s.doc_cliente, c.nome, s.status_servico,s.funcionario_responsavel from servico as s  join cliente as c on s.doc_cliente = c.documento  where c.doc_cliente = ? ");
          st.setString( 1,doc);
      
        ResultSet retorno = st.executeQuery();//executa o comando select
        DefaultTableModel tblModelo =(DefaultTableModel)tblServicos.getModel();
        while(retorno.next()){
            String linha[]={
                retorno.getString("s.id_servico"),
                retorno.getString("s.tipo_servico"),
                retorno.getString("s.valor_servico"),
                retorno.getString("s.defeito_informado"),
                retorno.getString("s.aparelho"),
                retorno.getString("c.nome"),
                retorno.getString("s.status_servico"),
				retorno.getString("s.funcionario_responsavel")
            };
        tblModelo.addRow(linha);    
        }
    }catch (ClassNotFoundException ex){
        JOptionPane.showMessageDialog(null,"Driver não colocado corretamente no library");
    }catch (SQLException ex){
        JOptionPane.showMessageDialog(null, "Verifique os parâmetros de conexão com o banco de dados" + ex.getMessage());
    }    
	
	
	
	  Color cor = new Color(33,44,52);
        getContentPane().setBackground(cor);
      