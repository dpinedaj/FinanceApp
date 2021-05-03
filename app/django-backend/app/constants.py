import pytz
class Constants:
    def __init__(self):
        self.__DATA_SCHEMA = "data"
        self.__EXCLUDING_SPENDS = ["Investments", "Borrows"]
        self.__EXCLUDING_INCOMES = ["Investment_returns", "Borrows"]
        self.__TIMEZONE = pytz.timezone('America/Bogota')
        self.__DATE_FORMAT = 'mm/dd/yyyy'

    @property
    def DATA_SCHEMA(self):
        return self.__DATA_SCHEMA

    @property
    def EXCLUDING_SPENDS(self):
        return self.__EXCLUDING_SPENDS

    @property
    def EXCLUDING_INCOMES(self):
        return self.__EXCLUDING_INCOMES
    
    @property
    def TIMEZONE(self):
        return self.__TIMEZONE

    @property
    def DATE_FORMAT(self):
        return self.__DATE_FORMAT

cts = Constants()
