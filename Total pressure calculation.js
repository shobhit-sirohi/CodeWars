// Given the molecular mass of two molecules M1 and M2, their masses present m1 and m2 in a vessel of volume V at a specific temperature T, find the total pressure P exerted by the molecules. 

// 8 kyu

solution= (M1, M2, m1, m2, V, T) => {
    return (((m1/M1)+(m2/M2))*0.082*(T+273.15))/V;
  }