const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profile = await fetchUserProfile(); // Busca dados do perfil do usuário
        setUserProfile(profile);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    };
    getUserProfile();
  }, []);

  // Renderiza um estado de carregamento enquanto `userProfile` é null
  if (!userProfile) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-blue-600 font-bold">Carregando perfil...</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 p-8 rounded-md shadow-md max-w-4xl mx-auto">
      {/* Header do Perfil */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={userProfile.avatar || "../../../../../public/assets/img/Ruben.png"}
          alt="Avatar do Usuário"
          className="w-20 h-20 rounded-full border-2 border-blue-500"
        />
        <div>
          <h1 className="text-2xl font-bold text-blue-700">{userProfile.nome}</h1>
          <p className="text-sm text-gray-600">{userProfile.email}</p>
        </div>
      </div>

      {/* Dados Pessoais */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600">Dados Pessoais</h2>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-gray-700">Data de Nascimento:</p>
            <p>{userProfile.dataNascimento || "Não informado"}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Gênero:</p>
            <p>{userProfile.genero || "Não informado"}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Estado Civil:</p>
            <p>{userProfile.estadoCivil || "Não informado"}</p>
          </div>
        </div>
      </div>

      {/* Contatos */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600">Contatos</h2>
        <div className="mt-2">
          <p className="font-medium text-gray-700">Telefone:</p>
          <p>{userProfile.telefone || "Não informado"}</p>
        </div>
        <div className="mt-2">
          <p className="font-medium text-gray-700">Endereço:</p>
          <p>{userProfile.endereco || "Não informado"}</p>
        </div>
      </div>

      {/* Registro Clínico */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600">Registro Clínico</h2>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-gray-700">Tipo Sanguíneo:</p>
            <p>{userProfile.tipoSanguineo || "Não informado"}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Alergias:</p>
            <p>{userProfile.alergias || "Nenhuma"}</p>
          </div>
        </div>
      </div>

      {/* Outras Informações */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600">Outras Informações</h2>
        <p className="mt-2 text-gray-700">
          {userProfile.observacoes || "Sem observações adicionais."}
        </p>
      </div>
    </div>
  );
};

export default Profile;
