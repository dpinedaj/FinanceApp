def parse_date(date):
    from datetime import datetime
    if date is None:
        return None   
    if hasattr(date, 'day'):
        return "{}/{}/{}".format(date.day, date.month, date.year)
    else:
        return datetime.strftime(datetime(date.year, date.month, 1), "%B-%Y")


def parse_money(amount):
    return "${:,}".format(amount) if amount is not None else None
