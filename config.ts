const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = import.meta.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`,
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  apiKey: getEnvironmentVariable('SENDGRID_API_KEY'),
};
