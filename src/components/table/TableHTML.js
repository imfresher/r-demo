function TableHTML() {
  return (
    <div>
      <div className="table__tools py-2">
        <div className="row py-2">
          <div className="col">
            <div className="tool__fillter">
              <div className="tool__fillter__container">
                <input type="text" name="filter" id="fillter" value="" />
                <button type="button"><i className="bi bi-search"></i></button>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <div className="tool__register ms-auto">
              <a href="javascript:void(0)" className="btn btn-primary"><i className="bi bi-plus"></i> Add new</a>
            </div>
          </div>
        </div>

        <div className="row py-2">
          <div className="col">
            <div className="tool__action">
              <div className="tool__action__item action__check">
                <i className="bi bi-check-lg"></i>
                <span className="text-bold">2 Selected</span>
                {/*<label htmlFor="check_all">Select All</label>*/}
              </div>
              <div className="tool__action__item">
                <a href="javascript:void(0)"><i className="bi bi-upload"></i> Import</a>
              </div>
              <div className="tool__action__item">
                <a href="javascript:void(0)"><i className="bi bi-download"></i> Export</a>
              </div>
              <div className="tool__action__item">
                <a href="javascript:void(0)"><i className="bi bi-pencil"></i> Edit</a>
              </div>
              <div className="tool__action__item">
                <a href="javascript:void(0)"><i className="bi bi-trash3"></i> Delete</a>
              </div>

            </div>
          </div>
          <div className="col d-flex align-items-center">
            <div className="tool__action ms-auto">
              <a href="javascript:void(0)" className="tool__action__item advandce__filter_btn"><i className="bi bi-funnel"></i> Advandce Filter</a>

              <div className="tool__action__item tool__sort_by">
                <label htmlFor="sort_by"><i className="bi bi-sort-down"></i> Sort by: </label>
                <select name="sort_by" id="sort_by">
                  <option value="id">ID</option>
                  <option value="name">Name</option>
                  <option value="position">Position</option>
                  <option value="department">Department</option>
                  <option value="email">Email</option>
                  <option value="experience" selected>Experience</option>
                  <option value="status">Status</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="advandce__filter_container" style={{ display: 'none' }}>
          Advandce filter
        </div>
      </div>

      <div className="table__wrapper table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="th-resort text-center"></th>
              <th className="th-check text-center">
                <input type="checkbox" name="check_all" id="check_all" value="1" checked />
              </th>
              <th className="th-no">No.</th>
              <th className="th-id">ID</th>
              <th className="img-small"></th>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
              <th>Email</th>
              <th>Experience</th>
              <th className="th-status">Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>111</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>001</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/1997192/avatars/normal/f4a8360e90be7c63e27096f075d5c5e1.png?1592063135" alt="" />
                </div>
              </td>
              <td>Perfect Day Foods</td>
              <td>Developer IOS</td>
              <td>D-Tech</td>
              <td>demo@domain.com</td>
              <td>1 year</td>
              <td className="text-center"><span className="badge text-bg-primary">Part-time</span></td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>20</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>002</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/9619488/avatars/mini/c093d73057616c648d06e456acacabab.jpg?1635306360" alt="" />
                </div>
              </td>
              <td>Bonanza</td>
              <td>Developer PHP</td>
              <td>D-Tech</td>
              <td>demo@domain.com</td>
              <td>4 year</td>
              <td className="text-center"><span className="badge text-bg-secondary">Part-time</span></td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>3</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>003</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/3116794/avatars/normal/87007ef7aaed143f3eb62dca003e027f.jpg?1615451756" alt="" />
                </div>
              </td>
              <td>ShipHawk</td>
              <td>UX Design</td>
              <td>D-Design</td>
              <td>demo@domain.com</td>
              <td>3 year</td>
              <td className="text-center"><span className="badge text-bg-success">Part-time</span></td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>4</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>004</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/2258422/avatars/mini/07d12299d11005e0e69caf0664d0cb6f.jpg?1661877500" alt="" />
                </div>
              </td>
              <td>Zto</td>
              <td>Lead Developer IOS</td>
              <td>D-Tech</td>
              <td>demo@domain.com</td>
              <td>5 year</td>
              <td className="text-center"><span className="badge text-bg-danger">Full-time</span></td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>5</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>005</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/6081502/avatars/mini/2d64f3ca7a31712070d91c80c7824bca.jpg?1666952824" alt="" />
                </div>
              </td>
              <td>Perfect Day Foods</td>
              <td>Lead UX Design</td>
              <td>D-Design</td>
              <td>demo@domain.com</td>
              <td>6 year</td>
              <td className="text-center"><span className="badge text-bg-warning">Full-time</span></td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr className="row-parent is--expanded is--hover">
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>6666</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-up"></i></span>
                  <span>006</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/6607744/avatars/mini/52bc3a5835fa595ac861e2044308d6c8.png?1645338604" alt="" />
                </div>
              </td>
              <td>Perfect Day Foods</td>
              <td>Developer PHP</td>
              <td>D-Tech</td>
              <td>demo@domain.com</td>
              <td>1 year</td>
              <td className="text-center"><span className="badge text-bg-info">Part-time</span></td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr className="row-child is--expanded is--hover">
              <td colSpan={4}></td>
              <td colSpan={1}>
                <h5>Office</h5>
                <p><i className="bi bi-geo-alt"></i> Minsk, Lenina 34/2</p>
              </td>
              <td colSpan={2}>
                <h5>Subordinates</h5>
                <p><i className="bi bi-person"></i> Audrey Flores</p>
                <p><i className="bi bi-person"></i> Terran Washington</p>
              </td>
              <td colSpan={1}>
                <h5>Birthday</h5>
                <p><i className="bi bi-calendar-check"></i> 1990, 22 August</p>
              </td>
              <td colSpan={3}>
                <h5>Contacts</h5>
                <p><i className="bi bi-telephone"></i> +84987654321</p>
                <p><i className="bi bi-twitter"></i> t.me/abcdxyz</p>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>7</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>007</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/4824889/avatars/mini/f59fd7f479c4fe699e7d507e9c540c6f.jpg?1618637626" alt="" />
                </div>
              </td>
              <td>Perfect Day Foods</td>
              <td>Developer PHP</td>
              <td>D-Tech</td>
              <td>demo@domain.com</td>
              <td>2 year</td>
              <td className="text-center"><i className="bi bi-battery-full text-success fs-1"></i></td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>7</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>007</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/4824889/avatars/mini/f59fd7f479c4fe699e7d507e9c540c6f.jpg?1618637626" alt="" />
                </div>
              </td>
              <td>Perfect Day Foods</td>
              <td>Developer PHP</td>
              <td>D-Tech</td>
              <td>demo@domain.com</td>
              <td>2 year</td>
              <td className="text-center">
                <span className="icon__text">
                  <i className="bi bi-dot text-warning fs-1"></i>
                  <span>Full-time</span>
                </span>
              </td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>8</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>008</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/118756/avatars/mini/0bc1d620d5e01358f46625ebe0826bcf.jpg?1650089307" alt="" />
                </div>
              </td>
              <td>Perfect Day Foods</td>
              <td>Developer PHP</td>
              <td>D-Tech</td>
              <td>demo@domain.com</td>
              <td>3 year</td>
              <td className="text-center">
                <span className="icon__text">
                  <i className="bi bi-chat-right-dots text-success"></i>
                  <span>Full-time</span>
                </span>
              </td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>89</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>014</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/118756/avatars/mini/0bc1d620d5e01358f46625ebe0826bcf.jpg?1650089307" alt="" />
                </div>
              </td>
              <td>Perfect Day Foods</td>
              <td>Developer PHP</td>
              <td>D-Tech</td>
              <td>demo@domain.com</td>
              <td>3 year</td>
              <td className="text-center">
                <span className="icon__text">
                  <i className="bi bi-chat-right-dots text-primary"></i>
                  <span>Full-time</span>
                </span>
              </td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>
              </td>
              <td className="text-center"><input type="checkbox" name="cb" /></td>
              <td>29</td>
              <td>
                <div className="row__collapse">
                  <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
                  <span>028</span>
                </div>
              </td>
              <td>
                <div className="img-small is--circle">
                  <img src="https://cdn.dribbble.com/users/118756/avatars/mini/0bc1d620d5e01358f46625ebe0826bcf.jpg?1650089307" alt="" />
                </div>
              </td>
              <td>Perfect Day Foods</td>
              <td>Developer PHP</td>
              <td>D-Tech</td>
              <td>demo@domain.com</td>
              <td>3 year</td>
              <td className="text-center">
                <span className="icon__text">
                  <i className="bi bi-chat-right-dots text-danger"></i>
                  <span>Full-time</span>
                </span>
              </td>
              <td>
                <div className="r__action">
                  {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-eye"></i></a>
                  <a href="javascript:void(0)" className="r__action p-2"><i className="bi bi-pencil"></i></a>
                  <a href="javascript:void(0)" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table__pagination d-flex">
        <div className="table__showing">Showing 2 in 5 items</div>
        <nav aria-label="..." className="ms-auto">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="javascript:void(0)">2</a>
            </li>
            <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TableHTML;
