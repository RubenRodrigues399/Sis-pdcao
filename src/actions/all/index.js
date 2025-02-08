 // Fetch especialidades from API
  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await fetch(URL_API);
        if (!response.ok) {
          console.error(
            "Erro na resposta da API:",
            response.status,
            response.statusText
          );
          return;
        }
        const data = await response.json();

        // Verificar se 'dados' é um array antes de salvar
        if (Array.isArray(data.dados)) {
          setEspecialidades(data.dados);
        } else {
          console.error("Os 'dados' da resposta não são um array:", data.dados);
          setEspecialidades([]); // Evitar quebra no frontend
        }
      } catch (error) {
        console.error("Erro ao buscar especialidades:", error);
        setEspecialidades([]); // Evitar quebra no frontend
      }
    };

    fetchEspecialidades();
  }, []);

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };